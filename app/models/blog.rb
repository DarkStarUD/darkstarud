class Blog < ApplicationRecord
    has_many :blog_images
    enum status: { draft: 0, published: 1 }
    acts_as_taggable 
end
