interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentCard({ children, className = '' }: ContentCardProps) {
  return (
    <div className={`bg-[var(--content-bg)] backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-md ${className}`}>
      {children}
    </div>
  );
}
