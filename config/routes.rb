Rails.application.routes.draw do
  get 'profile' => 'profile#index'
  post 'profile' => 'profile#update'

  devise_for :users
  root 'home#index'
end
