import TagBadge from "@/components/ui/TagBadge";

export default function FilterPills({ items }) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      {items.map((item, index) => (
        <TagBadge key={item.slug || item.name} active={index === 0}>
          {item.name}
        </TagBadge>
      ))}
    </div>
  );
}
