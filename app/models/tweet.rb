class Tweet < ActiveRecord::Base
  belongs_to :user

  def self.stream_for(current_user_id)
    joins(:user)
    .where(["users.id = :current_user_id or users.id in (
       select user_id from followers
       where followed_by = :current_user_id
      )", { current_user_id: current_user_id }])
    .order(created_at: :desc)
    .all
  end

  def as_json(options={})
    super(methods: [:name, :avatar])
  end

  def name
    user.display_name
  end

  def avatar
    user.gravatar
  end
end
