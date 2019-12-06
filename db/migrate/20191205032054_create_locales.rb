class CreateLocales < ActiveRecord::Migration[6.0]
  def change
    create_table :locales do |t|
      t.string :name
      t.text :image_url
      t.text :description
      t.boolean :historical
      t.boolean :skyline
      t.boolean :landscape
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
