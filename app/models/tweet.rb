class Tweet < ActiveRecord::Base
  belongs_to :user

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
