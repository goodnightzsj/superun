import homeTemplateData from './template-directory.json';
import templateIndexData from './template-index.json';

export type TemplateIndexRecord = {
  templateSlug: string;
  title: string;
  description: string;
  previewImage: string;
};

type RawTemplateDirectoryRecord = {
  snapshotSlug: string;
  templateSlug: string;
  title: string;
  description: string;
  category: '全部' | '有趣的应用' | '管理类应用' | '一些网站';
  deviceType: 'mobile' | 'desktop';
  previewImage: string;
  visitUrl: string;
  websiteIntroduction: string;
  publishedAt: number;
};

export type TemplateDirectoryRecord = RawTemplateDirectoryRecord & {
  previewSlug: string;
};

export type TemplateCatalogRecord = TemplateIndexRecord &
  Partial<Omit<TemplateDirectoryRecord, 'templateSlug' | 'title' | 'description' | 'previewImage'>>;

export type TemplateNarrativeBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'bullet'; label?: string; text: string };

function extractPreviewSlugFromVisitUrl(visitUrl: string | undefined, fallbackSlug: string) {
  if (visitUrl) {
    try {
      const hostname = new URL(visitUrl).hostname;
      if (hostname.endsWith('.superun.yun')) {
        return hostname.replace(/\.superun\.yun$/u, '');
      }
    } catch {
      // Ignore malformed URLs and keep the legacy alias as a safe fallback.
    }
  }
  return fallbackSlug;
}

function withPreviewSlug(template: RawTemplateDirectoryRecord): TemplateDirectoryRecord {
  return {
    ...template,
    previewSlug: extractPreviewSlugFromVisitUrl(template.visitUrl, template.snapshotSlug),
  };
}

const rawHomeTemplateDirectory = homeTemplateData as RawTemplateDirectoryRecord[];
export const homeTemplateDirectory = rawHomeTemplateDirectory.map(withPreviewSlug);

export const templateIndex = templateIndexData as TemplateIndexRecord[];

const homeTemplateBySlug = Object.fromEntries(
  homeTemplateDirectory.map((template) => [template.templateSlug, template]),
) as Record<string, TemplateDirectoryRecord>;

export const templateCatalog = templateIndex.map((template) => ({
  ...template,
  ...(homeTemplateBySlug[template.templateSlug] ?? {}),
})) as TemplateCatalogRecord[];

export const templateCatalogByTemplateSlug = Object.fromEntries(
  templateCatalog.map((template) => [template.templateSlug, template]),
) as Record<string, TemplateCatalogRecord>;

const routeSlugEntries = new Map<string, TemplateDirectoryRecord>();

for (const template of homeTemplateDirectory) {
  if (template.previewSlug) {
    routeSlugEntries.set(template.previewSlug, template);
  }
  if (template.snapshotSlug) {
    routeSlugEntries.set(template.snapshotSlug, template);
  }
}

export const homeTemplateByRouteSlug = Object.fromEntries(routeSlugEntries) as Record<string, TemplateDirectoryRecord>;
export const homeTemplateRouteSlugs = [...routeSlugEntries.keys()];

export function getTemplateCommunityPath(template: Pick<TemplateDirectoryRecord, 'previewSlug'>) {
  return `/web/community-view/${template.previewSlug}`;
}

export function formatTemplatePublishedAt(timestamp: number | undefined) {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
}

export function splitWebsiteIntroduction(content: string | undefined) {
  if (!content) return [];
  return content
    .replace(/\r/g, '')
    .replace(/\*\*/g, '')
    .split('\n')
    .map((line) => line.trim().replace(/^- /, ''))
    .filter(Boolean);
}

export function parseWebsiteIntroduction(content: string | undefined): TemplateNarrativeBlock[] {
  if (!content) return [];

  return content
    .replace(/\r/g, '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const headingMatch = line.match(/^\*\*(.+?)\*\*$/u);
      if (headingMatch) {
        return {
          type: 'heading',
          text: headingMatch[1].trim(),
        } satisfies TemplateNarrativeBlock;
      }

      const bulletMatch = line.match(/^-+\s*\*\*(.+?)\*\*\s*-\s*(.+)$/u);
      if (bulletMatch) {
        return {
          type: 'bullet',
          label: bulletMatch[1].trim(),
          text: bulletMatch[2].trim(),
        } satisfies TemplateNarrativeBlock;
      }

      if (line.startsWith('- ')) {
        return {
          type: 'bullet',
          text: line.slice(2).replace(/\*\*/g, '').trim(),
        } satisfies TemplateNarrativeBlock;
      }

      return {
        type: 'paragraph',
        text: line.replace(/\*\*/g, '').trim(),
      } satisfies TemplateNarrativeBlock;
    });
}
