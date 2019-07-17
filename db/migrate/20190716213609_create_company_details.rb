class CreateCompanyDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :company_details do |t|
      t.string :name 
      t.string :category
      t.text :details
      t.timestamps
    end
  end
end
