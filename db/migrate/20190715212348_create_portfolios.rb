class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.string :name
      t.text :image
      t.references :portfolio_category, foreign_key: true
      t.timestamps
    end
  end
end
