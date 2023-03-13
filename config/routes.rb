Rails.application.routes.draw do
  resources :posts
  root "post#index"
  # namespace :api do
  #   namespace :v1 do
  #     resources :items, param: :slug
  #     resources :reviews, only: [:create, :destroy]
  #   end
  end

  
  
end

