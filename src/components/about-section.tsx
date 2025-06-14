import { getReadmeFileOfRepo } from "@/data/get-repo"
import { markdownToHtml } from "@/lib/markdown";

export default async function AboutSection() {

  const { data, error } = await getReadmeFileOfRepo("vishal-kumar3")

  if (error || !data) {
    return <div className="text-red-500">Error loading about section</div>
  }

  let renderedReadmeHtml = '';
  if (data) {
    renderedReadmeHtml = await markdownToHtml(data);
  }

  return (
    <div className="max-w-4xl py-6 mx-auto text-foreground">
      {renderedReadmeHtml ? (
        <div
          dangerouslySetInnerHTML={{ __html: renderedReadmeHtml }}
          className="
              [&_p[align='center']]:text-center [&_p[align='center']]:mb-6 [&_p[align='center']]:flex [&_p[align='center']]:justify-center [&_p[align='center']]:items-center [&_p[align='center']]:gap-4 [&_p[align='center']]:flex-wrap
              [&_h1]:text-center [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-8 [&_h1]:mt-4
              [&_h2]:text-center [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-6 [&_h2]:mt-12
              [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:shadow-sm [&_p[align='center']_img]:mx-0 [&_p:not([align='center'])_img]:mx-auto [&_p:not([align='center'])_img]:block
              [&_a]:inline-block [&_a]:mx-1 [&_a]:transition-transform [&_a]:hover:scale-105
              [&_p]:leading-relaxed [&_p]:text-muted-foreground
              space-y-4
            "
        />
      ) : (
        <p className="text-gray-500">No README.md found for this section.</p>
      )}
    </div>
  )
}
