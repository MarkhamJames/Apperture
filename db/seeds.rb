# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create({
  username: 'Admin',
  email: 'admin@admin.com',
  password: 'password',
})

locales = Locale.create({
    name: "Empire State Building",
    image_url: "https://www.esbnyc.com/sites/default/files/styles/timely_content_image_large__885x590_/public/default_images/brs_0330.jpg?itok=m3gzF1YH",
    description: "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan, New York City. It was designed by Shreve, Lamb & Harmon and completed in 1931. The building has a roof height of 1,250 feet and stands a total of 1,454 feet tall, including its antenna.",
    historical: false,
    skyline: true,
    landscape: false,
    user: user
  })