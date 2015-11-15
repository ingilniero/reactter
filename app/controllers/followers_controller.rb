class FollowersController < ApplicationController
  def index
    render json: User.where(["id != ?", current_user.id]).order("random()").all
  end
end
