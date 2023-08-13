import { z, defineCollection } from "astro:content";
const openingsCollection = defineCollection({

	schema: z.object({

		description: z.string(),
		link: z.string(),
		order: z.number(),
		title: z.string(),

	})

})
const workCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		description: z.string(),
		url: z.string(),
		image: z.string(),
		brand: z.string(),
		order: z.number(),
		category: z.array(z.string()),
		link: z.string(),
		video_flag: z.boolean(),
		video: z.string(),
		award: z.boolean(),
		award_image: z.string(),

	})

})
export const collections = {

	"openings": openingsCollection,
	"work": workCollection,

}
