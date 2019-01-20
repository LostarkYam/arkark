class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      t.string :name
      t.string :description
      t.integer :acquired_level
      t.integer :cooldown
      t.string :skill_type
      t.integer :mana_cost
      t.string :effect
      t.integer :t_1_1
      t.integer :t_1_2
      t.integer :t_1_3
      t.integer :t_2_1
      t.integer :t_2_2
      t.integer :t_2_3
      t.integer :t_3_1
      t.integer :t_3_2
      t.integer :t_3_3
      t.integer :arkclass_id

      t.timestamps
    end
  end
end
