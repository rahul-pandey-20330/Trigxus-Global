
export default function SectionHeading({
  label,
  title,
  description,
  center = false
}: {
  label: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <span className={`section-label ${center ? "justify-center" : ""}`}>
        {label}
      </span>
      <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-[#0B1730] md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-base leading-8 text-slate-500 ${center ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
