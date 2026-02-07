import type { Article } from '../../data';
import { ArticleCard } from './ArticleCard';

interface KanbanBoardProps {
  articles: Article[];
}

const columns = [
  { id: 'draft' as const, title: 'Draft', color: 'border-muted' },
  { id: 'review' as const, title: 'Review', color: 'border-amber' },
  { id: 'ready' as const, title: 'Ready', color: 'border-green' },
  { id: 'published' as const, title: 'Published', color: 'border-slate' },
];

export function KanbanBoard({ articles }: KanbanBoardProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {columns.map((column) => {
        const columnArticles = articles.filter((a) => a.status === column.id);

        return (
          <div key={column.id} className="flex flex-col">
            <div
              className={`bg-surface border-2 ${column.color} rounded-t-lg px-3 py-2 flex items-center justify-between`}
            >
              <h3 className="text-xs font-semibold text-text uppercase tracking-wider">
                {column.title}
              </h3>
              <span className="text-xs font-mono text-dim">{columnArticles.length}</span>
            </div>

            <div className="bg-surface/50 border border-t-0 border-border rounded-b-lg p-2 space-y-2 min-h-[400px]">
              {columnArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
