class CreateCompanyImages < ActiveRecord::Migration[5.2]
  def change
    create_table :company_images do |t|
      t.string :name
      t.string :category
      t.text :image
      t.timestamps
    end
  end
end
