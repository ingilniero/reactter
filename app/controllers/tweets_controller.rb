class TweetsController < ApplicationController
  def index
    render json: Tweet.all
  end

  def create
    tweet = Tweet.create(body: params[:tweet], user_id: current_user)
    render json: tweet, status: :created
  end
end
