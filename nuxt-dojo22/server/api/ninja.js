export default defineEventHandler(async(event) => {
//  const {name}=useQuery(event)
// const {age}=await useBody(event)

const{data}=await $fetch('https://api.currencyapi.com/v3/latest?apikey=eJdPhICJUDBt6B4e4TX6DZ4A9Xos4Z2JRZ8xh2v2')
  return data
});
