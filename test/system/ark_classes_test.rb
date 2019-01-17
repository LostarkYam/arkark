require "application_system_test_case"

class ArkClassesTest < ApplicationSystemTestCase
  setup do
    @ark_class = ark_classes(:one)
  end

  test "visiting the index" do
    visit ark_classes_url
    assert_selector "h1", text: "Ark Classes"
  end

  test "creating a Ark class" do
    visit ark_classes_url
    click_on "New Ark Class"

    fill_in "Description", with: @ark_class.description
    fill_in "Name", with: @ark_class.name
    fill_in "Type", with: @ark_class.type
    click_on "Create Ark class"

    assert_text "Ark class was successfully created"
    click_on "Back"
  end

  test "updating a Ark class" do
    visit ark_classes_url
    click_on "Edit", match: :first

    fill_in "Description", with: @ark_class.description
    fill_in "Name", with: @ark_class.name
    fill_in "Type", with: @ark_class.type
    click_on "Update Ark class"

    assert_text "Ark class was successfully updated"
    click_on "Back"
  end

  test "destroying a Ark class" do
    visit ark_classes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ark class was successfully destroyed"
  end
end
