import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import rehypeToc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeFigure from 'rehype-figure';
import { s } from 'hastscript';

// https://astro.build/config
export default defineConfig({
    markdown: {
        // Applied to .md and .mdx files
        remarkPlugins: [[remarkToc, {className: 'rbt-accordion-style rbt-accordion-01 accordion'}]],
        rehypePlugins: [
            [rehypeFigure, {
                className: "post-thumbnail mb--30 position-relative wp-block-image alignwide" 
            }],
            [rehypeSlug, {}],
            [rehypeAutolinkHeadings, {behavior: 'append', content: s(
                // add SVG using rehype-autolink-headings in mdx.js - https://github.com/remarkjs/remark/discussions/732#discussioncomment-816042
                // another reference: https://github.com/janosh/svelte-toc/commit/8493df334a11661eddf03434372f6cd71ea313c1
                `svg`,
                { width: 16, height: 16, viewBox: `0 0 16 16` },
                // symbol #link-icon defined in app.html
                s(`use`, { 'xlink:href': `#link-icon` })
              ),}],
            [rehypeToc, 
                {
                    headings: ['h1','h2', 'h3'], 
                    cssClasses: {
                        toc: 'rbt-accordion-style rbt-accordion-01 accordion mb--20'
                    },
                    customizeTOC: function (n) {
                        const oldChildren = n.children
                        const customComponents = [
                                    {
                                        type : 'element',
                                        tagName: 'div',
                                        properties: {className: 'accordion-item card'},
                                        children : [
                                            {
                                                type : 'element',
                                                tagName: 'h2',
                                                properties: {className : 'accordion-header card-header', id: 'headingOne', "data-text":"Table Of Contents"},
                                                children : [
                                                    {
                                                        type : 'element',
                                                        tagName : 'button',
                                                        properties : {className : 'accordion-button collapsed', type: 'button', "data-bs-toggle":"collapse", "data-bs-target":"#collapseOne", "aria-expanded":"true", "aria-controls":"collapseOne", id:"button-toc", value:"Table Of Contents"},
                                                        children : [],
                                                    }
                                                ], 
                                            },
                                            {
                                                type: 'element',
                                                tagName: 'div',
                                                properties: {className : 'accordion-collapse collapse hide', "aria-labelledby":"headingOne", "data-bs-parent":"#accordionExamplea1", id:"collapseOne"},
                                                children: [{
                                                    type: 'element',
                                                    tagName : 'div',
                                                    properties: {className : 'accordion-body card-body'},
                                                    children : oldChildren
                                                }]
                                            } 
                                        ]
                                    }
                                
                            ]
                        
                        const accordion = {type : 'element', tagName: 'div', properties : {className: 'accordion', id : 'accordionExamplea1'}, children : customComponents}
                        n.children = [accordion]
                        return n
                    
                    }
            
            }]
        ]
        // remarkRehype: [rehypeToc]
    }
});
