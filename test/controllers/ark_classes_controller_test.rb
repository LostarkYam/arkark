require 'test_helper'

class ArkClassesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ark_class = ark_classes(:one)
  end

  test "should get index" do
    get ark_classes_url
    assert_response :success
  end

  test "should get new" do
    get new_ark_class_url
    assert_response :success
  end

  test "should create ark_class" do
    assert_difference('ArkClass.count') do
      post ark_classes_url, params: { ark_class: { description: @ark_class.description, name: @ark_class.name, type: @ark_class.type } }
    end

    assert_redirected_to ark_class_url(ArkClass.last)
  end

  test "should show ark_class" do
    get ark_class_url(@ark_class)
    assert_response :success
  end

  test "should get edit" do
    get edit_ark_class_url(@ark_class)
    assert_response :success
  end

  test "should update ark_class" do
    patch ark_class_url(@ark_class), params: { ark_class: { description: @ark_class.description, name: @ark_class.name, type: @ark_class.type } }
    assert_redirected_to ark_class_url(@ark_class)
  end

  test "should destroy ark_class" do
    assert_difference('ArkClass.count', -1) do
      delete ark_class_url(@ark_class)
    end

    assert_redirected_to ark_classes_url
  end
end
