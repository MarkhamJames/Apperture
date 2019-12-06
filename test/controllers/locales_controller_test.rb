require 'test_helper'

class LocalesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @locale = locales(:one)
  end

  test "should get index" do
    get locales_url, as: :json
    assert_response :success
  end

  test "should create locale" do
    assert_difference('Locale.count') do
      post locales_url, params: { locale: { description: @locale.description, historical: @locale.historical, image_url: @locale.image_url, landscape: @locale.landscape, name: @locale.name, skyline: @locale.skyline, user_id: @locale.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show locale" do
    get locale_url(@locale), as: :json
    assert_response :success
  end

  test "should update locale" do
    patch locale_url(@locale), params: { locale: { description: @locale.description, historical: @locale.historical, image_url: @locale.image_url, landscape: @locale.landscape, name: @locale.name, skyline: @locale.skyline, user_id: @locale.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy locale" do
    assert_difference('Locale.count', -1) do
      delete locale_url(@locale), as: :json
    end

    assert_response 204
  end
end
