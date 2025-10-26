<template>
  <script
    type="application/ld+json"
    v-html="schemaJson"
  />
</template>

<script setup lang="ts">
interface Props {
  name?: string
  address?: string
  phone?: string
  email?: string
  website?: string
  latitude?: number
  longitude?: number
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Boniface Mwangi Campaign',
  address: 'Nairobi, Kenya',
  phone: '+254 700 000 000',
  email: 'info@boniface-mwangi.com',
  website: 'https://boniface-mwangi.com',
  latitude: -1.2921,
  longitude: 36.8219,
  description: 'Political campaign for Boniface Mwangi, building a better Kenya together.'
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: props.name,
  description: props.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'Kenya',
    streetAddress: props.address
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: props.latitude,
    longitude: props.longitude
  },
  telephone: props.phone,
  email: props.email,
  url: props.website,
  sameAs: [
    'https://twitter.com/bonifacemwangi',
    'https://facebook.com/bonifacemwangi',
    'https://instagram.com/bonifacemwangi'
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: 'Free'
}

const schemaJson = computed(() => JSON.stringify(schema, null, 2))
</script>
