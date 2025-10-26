<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />
    <Meta property="og:title" :content="title" />
    <Meta property="og:description" :content="description" />
    <Meta property="og:type" content="website" />
    <Meta property="og:url" :content="url" />
    <Meta property="og:image" :content="image" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" :content="title" />
    <Meta name="twitter:description" :content="description" />
    <Meta name="twitter:image" :content="image" />
    <Link rel="canonical" :href="url" />
  </Head>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  url?: string
  image?: string
}

const props = withDefaults(defineProps<Props>(), {
  url: 'https://boniface-mwangi.com',
  image: '/og-image.jpg'
})
</script>
