class Skill < ApplicationRecord
    validates :name, :description, :effect, presence: true
end
