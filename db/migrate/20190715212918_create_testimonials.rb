class CreateTestimonials < ActiveRecord::Migration[5.2]
  def change
    create_table :testimonials do |t|
      t.string :name 
      t.string :title 
      t.string :company 
      t.text :comment
      t.timestamps
    end
  end
end
