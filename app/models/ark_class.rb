class ArkClass < ApplicationRecord
    validates :name, :classtype, presence: true
    has_many :skills, foreign_key: :arkclass_id
end
