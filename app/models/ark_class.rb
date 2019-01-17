class ArkClass < ApplicationRecord
    validates :name, :classtype, presence: true
end
