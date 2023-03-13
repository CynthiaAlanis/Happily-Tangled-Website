Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      resources :items, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  
  
end

