require 'test_helper'

class PassivesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @passife = passives(:one)
  end

  test "should get index" do
    get passives_url
    assert_response :success
  end

  test "should get new" do
    get new_passife_url
    assert_response :success
  end

  test "should create passife" do
    assert_difference('Passive.count') do
      post passives_url, params: { passife: { description: @passife.description, name: @passife.name } }
    end

    assert_redirected_to passife_url(Passive.last)
  end

  test "should show passife" do
    get passife_url(@passife)
    assert_response :success
  end

  test "should get edit" do
    get edit_passife_url(@passife)
    assert_response :success
  end

  test "should update passife" do
    patch passife_url(@passife), params: { passife: { description: @passife.description, name: @passife.name } }
    assert_redirected_to passife_url(@passife)
  end

  test "should destroy passife" do
    assert_difference('Passive.count', -1) do
      delete passife_url(@passife)
    end

    assert_redirected_to passives_url
  end
end
