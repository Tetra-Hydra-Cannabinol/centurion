import { motion } from 'framer-motion';
import { FileText, Calendar } from 'lucide-react';
import type { Article } from '../../data';

interface ArticleCardProps {
  article: Article;
  index: number;
}

const statusColors = {
  draft: 'bg-muted/20 text-muted border-muted/40',
  review: 'bg-amber/20 text-amber border-amber/40',
  ready: 'bg-green/20 text-green border-green/40',
  published: 'bg-slate/20 text-slate border-slate/40',
};

export function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-card border border-border rounded-lg p-3 hover:border-gold/30 transition-colors cursor-pointer"
    >
      <div className="flex items-start gap-2 mb-2">
        <FileText size={14} className="text-gold mt-0.5 flex-shrink-0" />
        <h4 className="text-sm font-medium text-text flex-1 leading-tight">
          {article.title}
        </h4>
      </div>

      <div className="flex items-center justify-between text-[10px] text-dim mb-2">
        <span className="font-mono">{article.wordCount} words</span>
        <div className="flex items-center gap-1">
          <Calendar size={10} />
          <span className="font-mono">{article.date}</span>
        </div>
      </div>

      <span
        className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider border ${
          statusColors[article.status]
        }`}
      >
        {article.status}
      </span>
    </motion.div>
  );
}
