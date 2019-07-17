Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/vader', as: 'rails_admin'
  root to: 'pages#home'
end
