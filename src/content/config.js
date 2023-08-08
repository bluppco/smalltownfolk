import { z, defineCollection } from "astro:content";
const workCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		description: z.string(),
		publish_date: z.string(),
		url: z.string(),
		image: z.string(),

	})

})
export const collections = {

	"work": workCollection

}
