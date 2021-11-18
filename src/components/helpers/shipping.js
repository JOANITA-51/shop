export const Zones = {
    'Zone A': {
        'transport_mode': ['air', 'sea'],
        'shipping_methods': {
            'air': {
                'category':'International',
                'delivery_agents': [
                    {
                        'name': 'DHL',
                        'price': '$100',
                    },
                    {
                        'name': 'UPS',
                        'price': '$120',
                    },
                ]
            },
            'sea': {
                'category': 'International',
                'delivery_agents': [
                    {
                        'name': 'DHL',
                        'price':'$20'
                    },
                    {
                        'name': 'Posta Uganda',
                        'price':'$25'
                    },
                    {
                        'name': 'EMS',
                        'price':'$32'
                    }
                ]
            }
        }
    },
    'Zone B': {
        'transport_mode': ['air', 'road'],

    },
}

export const  regions = [
     {
        'region':'asia',
        'zone': 'Zone A',
        countries: ['China', 'Japan', 'Singapore'],
    },
     {
        'region':'Europe',
        'zone': 'Zone A',
        countries: ['Uk', 'France', 'Spain'],
    },
    {
        'region':'North America',
        'zone': 'Zone A',
        countries: ['Canada','Usa'],
    },
    {
        'region':'africa',
        'zone': 'Zone B',
        countries: ['Uganda', 'South Sudan','Rwanda'],
    },
    {
        'region':'middle_east',
        'zone': 'Zone B',
        countries: ['United Arab Emirates']
    }
]

export const shipping_methods = {
    'International': {

    },
    'Local': {

    },
    'Pick up': {

    },
    'Free': {

    }
}
let country = 'uganda'
const [region_which_contain_country] = regions.filter(region => region.countries.includes(country))
let {zone} = region_which_contain_country
console.log(Zones[zone])
// console.log(regions.filter(region => region.countries.includes(country)).map(region => region.zone))
// for(let region of regions){
//     console.log(region)
// }

