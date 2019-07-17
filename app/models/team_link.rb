class TeamLink < ApplicationRecord
    belongs_to :team
    belongs_to :category_link
end
