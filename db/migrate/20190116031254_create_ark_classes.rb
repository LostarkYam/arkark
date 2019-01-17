class CreateArkClasses < ActiveRecord::Migration[5.2]
  def change
    create_table :ark_classes do |t|
      t.string :name
      t.string :classtype
      t.string :description

      t.timestamps
    end
  end
end
