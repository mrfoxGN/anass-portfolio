import PageTransition from "@/components/PageTransition";

export default function ProjectsTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
}