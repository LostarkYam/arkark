require "application_system_test_case"

class SkillsTest < ApplicationSystemTestCase
  setup do
    @skill = skills(:one)
  end

  test "visiting the index" do
    visit skills_url
    assert_selector "h1", text: "Skills"
  end

  test "creating a Skill" do
    visit skills_url
    click_on "New Skill"

    fill_in "Acquired level", with: @skill.acquired_level
    fill_in "Cooldown", with: @skill.cooldown
    fill_in "Description", with: @skill.description
    fill_in "Effect", with: @skill.effect
    fill_in "Mana cost", with: @skill.mana_cost
    fill_in "Name", with: @skill.name
    fill_in "Skill type", with: @skill.skill_type
    fill_in "T 1 1", with: @skill.t_1_1
    fill_in "T 1 2", with: @skill.t_1_2
    fill_in "T 1 3", with: @skill.t_1_3
    fill_in "T 2 1", with: @skill.t_2_1
    fill_in "T 2 2", with: @skill.t_2_2
    fill_in "T 2 3", with: @skill.t_2_3
    fill_in "T 3 1", with: @skill.t_3_1
    fill_in "T 3 2", with: @skill.t_3_2
    fill_in "T 3 3", with: @skill.t_3_3
    click_on "Create Skill"

    assert_text "Skill was successfully created"
    click_on "Back"
  end

  test "updating a Skill" do
    visit skills_url
    click_on "Edit", match: :first

    fill_in "Acquired level", with: @skill.acquired_level
    fill_in "Cooldown", with: @skill.cooldown
    fill_in "Description", with: @skill.description
    fill_in "Effect", with: @skill.effect
    fill_in "Mana cost", with: @skill.mana_cost
    fill_in "Name", with: @skill.name
    fill_in "Skill type", with: @skill.skill_type
    fill_in "T 1 1", with: @skill.t_1_1
    fill_in "T 1 2", with: @skill.t_1_2
    fill_in "T 1 3", with: @skill.t_1_3
    fill_in "T 2 1", with: @skill.t_2_1
    fill_in "T 2 2", with: @skill.t_2_2
    fill_in "T 2 3", with: @skill.t_2_3
    fill_in "T 3 1", with: @skill.t_3_1
    fill_in "T 3 2", with: @skill.t_3_2
    fill_in "T 3 3", with: @skill.t_3_3
    click_on "Update Skill"

    assert_text "Skill was successfully updated"
    click_on "Back"
  end

  test "destroying a Skill" do
    visit skills_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Skill was successfully destroyed"
  end
end
