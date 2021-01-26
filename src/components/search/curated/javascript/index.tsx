import React from 'react'
import {NextSeo} from 'next-seo'
import Card from 'components/pages/home/card'
import Collection from 'components/pages/home/collection'
import Topic from '../../components/topic'
import javascriptPageData from './javascript-page-data'
import {find} from 'lodash'
import EggheadPlayer from 'components/EggheadPlayer'
import Image from 'next/image'
import ExternalTrackedLink from '../../../external-tracked-link'

const SearchJavaScript = () => {
  const location = 'javascript landing'
  const description = `Life is too short for lonnnnnng boring videos. Learn JavaScript using the best screencast tutorial videos online.`
  const title = `In-Depth Up-to-Date JavaScript Tutorials for ${new Date().getFullYear()}`

  const beginner: any = find(javascriptPageData, {id: 'beginner'})
  const intermediate: any = find(javascriptPageData, {id: 'intermediate'})
  const advanced: any = find(javascriptPageData, {id: 'advanced'})
  const stateManagementVideo: any = find(javascriptPageData, {
    id: 'state-management-video',
  })
  const stateManagementFeatured: any = find(javascriptPageData, {
    id: 'state-management-featured',
  })
  const stateManagementCollection: any = find(javascriptPageData, {
    id: 'state-management-collection',
  })
  const stateManagementQuickly: any = find(javascriptPageData, {
    id: 'state-management-quickly',
  })
  const reactArticles: any = find(javascriptPageData, {id: 'articles'})
  const reactTalks: any = find(javascriptPageData, {id: 'talks'})
  const reactPodcasts: any = find(javascriptPageData, {id: 'podcasts'})

  return (
    <div className="mb-10 pb-10 py-5 xl:px-0 px-5 max-w-screen-xl mx-auto dark:bg-trueGray-900">
      <NextSeo
        description={description}
        title={title}
        titleTemplate={'%s | egghead.io'}
        twitter={{
          site: `@eggheadio`,
          cardType: 'summary_large_image',
        }}
        openGraph={{
          title,
          description: description,
          site_name: 'egghead',
          images: [
            {
              url: `https://p-ZmFjNlQ.b3.n0.cdn.getcloudapp.com/items/GGu6PRP8/81661b86-2d95-4ed1-85f3-cce8ce7bf974.png?v=4c6081b4267a169ef8150d9ae7a64a3e`,
            },
          ],
        }}
      />
      <div className="md:grid md:grid-cols-12 grid-cols-1 gap-5 items-start space-y-5 md:space-y-0 dark:bg-trueGray-900">
        <Topic
          className="col-span-8"
          title="JavaScript"
          imageUrl="https://p-ZmFjNlQ.b3.n0.cdn.getcloudapp.com/items/GGu6PRP8/81661b86-2d95-4ed1-85f3-cce8ce7bf974.png?v=4c6081b4267a169ef8150d9ae7a64a3e"
        >
          {`
If there's one thing that never gets old, it's rock-solid JavaScript fundamentals. 

When you're working in frameworks like React, Vue, and Angular, it's easy to forget that most of what you're writing is still JavaScript. We all get swept away in the excitement of new tools, but you need to lay down a stable foundation before stacking too much on top.

A strong understanding of JavaScript is essential for having a successful career, no matter which framework you use. 

This is a curated resource covering the important parts of the whole language. We'll show you what you need to know and guide you through learning it.

When someone comes to you and asks "Hey! Can you build this?", you'll be able to say "yes" with confidence.

`}
        </Topic>
        <ExternalTrackedLink
          eventName="clicked epic react banner"
          params={{location}}
          className="block md:col-span-4 rounded-md w-full h-full overflow-hidden border-0 border-gray-100 relative"
          href="https://epicreact.dev"
        >
          <Image
            priority
            quality={100}
            width={417}
            height={463}
            src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1611336740/next.egghead.io/react/epic_react_link_banner.png"
            alt="epicreact.dev by Kent C. Dodds"
          />
        </ExternalTrackedLink>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 items-start sm:mt-5 mt-3">
        <Card resource={beginner} location={location}>
          <Collection />
        </Card>
        <Card resource={intermediate} location={location} className="h-full">
          <Collection />
        </Card>
        <Card resource={advanced} location={location} className="h-full">
          <Collection />
        </Card>
      </div>
    </div>
  )
}

export default SearchJavaScript
