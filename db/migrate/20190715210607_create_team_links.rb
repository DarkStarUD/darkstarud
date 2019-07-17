class CreateTeamLinks < ActiveRecord::Migration[5.2]
  def change
    create_table :team_links do |t|
      t.string :name 
      t.string :link
      t.references :team, foreign_key: true
      t.timestamps
    end
  end
end
