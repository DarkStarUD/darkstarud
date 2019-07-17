class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :name 
      t.string :type
      t.string :author 
      t.text :post 
      t.text :image
      t.references :blog_category, foreign_key: true
      t.integer :status, default: 0
      t.timestamps
    end
  end
end
