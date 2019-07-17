class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.string :name
      t.integer :percentage
      t.timestamps
    end
  end
end
