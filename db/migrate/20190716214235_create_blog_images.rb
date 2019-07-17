class CreateBlogImages < ActiveRecord::Migration[5.2]
  def change
    create_table :blog_images do |t|
      t.references :blog, foreign_key: true
      t.text :image
      t.timestamps
    end
  end
end
