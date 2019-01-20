require "application_system_test_case"

class PassivesTest < ApplicationSystemTestCase
  setup do
    @passife = passives(:one)
  end

  test "visiting the index" do
    visit passives_url
    assert_selector "h1", text: "Passives"
  end

  test "creating a Passive" do
    visit passives_url
    click_on "New Passive"

    fill_in "Description", with: @passife.description
    fill_in "Name", with: @passife.name
    click_on "Create Passive"

    assert_text "Passive was successfully created"
    click_on "Back"
  end

  test "updating a Passive" do
    visit passives_url
    click_on "Edit", match: :first

    fill_in "Description", with: @passife.description
    fill_in "Name", with: @passife.name
    click_on "Update Passive"

    assert_text "Passive was successfully updated"
    click_on "Back"
  end

  test "destroying a Passive" do
    visit passives_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Passive was successfully destroyed"
  end
end
