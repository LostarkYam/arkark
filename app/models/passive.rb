class Passive < ApplicationRecord
    validates :name, :description, presence: true
end
