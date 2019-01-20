json.extract! skill, :id, :name, :description, :acquired_level, :cooldown, :skill_type, :mana_cost, :effect, :t_1_1, :t_1_2, :t_1_3, :t_2_1, :t_2_2, :t_2_3, :t_3_1, :t_3_2, :t_3_3, :created_at, :updated_at
json.url api_v1_skill_url(skill, format: :json)
