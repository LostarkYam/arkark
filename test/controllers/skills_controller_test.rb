require 'test_helper'

class SkillsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @skill = skills(:one)
  end

  test "should get index" do
    get skills_url
    assert_response :success
  end

  test "should get new" do
    get new_skill_url
    assert_response :success
  end

  test "should create skill" do
    assert_difference('Skill.count') do
      post skills_url, params: { skill: { acquired_level: @skill.acquired_level, cooldown: @skill.cooldown, description: @skill.description, effect: @skill.effect, mana_cost: @skill.mana_cost, name: @skill.name, skill_type: @skill.skill_type, t_1_1: @skill.t_1_1, t_1_2: @skill.t_1_2, t_1_3: @skill.t_1_3, t_2_1: @skill.t_2_1, t_2_2: @skill.t_2_2, t_2_3: @skill.t_2_3, t_3_1: @skill.t_3_1, t_3_2: @skill.t_3_2, t_3_3: @skill.t_3_3 } }
    end

    assert_redirected_to skill_url(Skill.last)
  end

  test "should show skill" do
    get skill_url(@skill)
    assert_response :success
  end

  test "should get edit" do
    get edit_skill_url(@skill)
    assert_response :success
  end

  test "should update skill" do
    patch skill_url(@skill), params: { skill: { acquired_level: @skill.acquired_level, cooldown: @skill.cooldown, description: @skill.description, effect: @skill.effect, mana_cost: @skill.mana_cost, name: @skill.name, skill_type: @skill.skill_type, t_1_1: @skill.t_1_1, t_1_2: @skill.t_1_2, t_1_3: @skill.t_1_3, t_2_1: @skill.t_2_1, t_2_2: @skill.t_2_2, t_2_3: @skill.t_2_3, t_3_1: @skill.t_3_1, t_3_2: @skill.t_3_2, t_3_3: @skill.t_3_3 } }
    assert_redirected_to skill_url(@skill)
  end

  test "should destroy skill" do
    assert_difference('Skill.count', -1) do
      delete skill_url(@skill)
    end

    assert_redirected_to skills_url
  end
end
