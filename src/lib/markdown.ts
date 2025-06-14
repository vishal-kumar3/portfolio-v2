"use server"

import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm)
    .use(html)
    .process(markdown);

  const processedHtml = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSanitize)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(() => (tree: any) => {
      // Add custom classes to headings
      tree.children.forEach((node: any) => {
        if (node.type === 'element') {
          if (node.tagName === 'h1') {
            node.properties = { ...node.properties, className: ['text-center text-3xl font-bold mb-6'] };
          }
        }
      });
    })
    .use(rehypeStringify)
    .process(result.toString());

  return processedHtml.toString();
}
