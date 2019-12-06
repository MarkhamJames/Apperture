class LocalesController < ApplicationController
  before_action :set_locale, only: [:show, :update, :destroy]
  before_action :authorize_request, except: %i[index show]
  
  # GET /locales
  def index
    @locales = Locale.all

    render json: @locales
  end

  # GET /locales/1
  def show
    render json: @locale
  end

  # POST /locales
  def create
    @locale = Locale.new(locale_params)

    if @current_user.locales << @locale
      render json: @locale, status: :created, location: @locale
    else
      render json: @locale.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /locales/1
  def update
    if @locale.user == @current_user
      if @locale.update(locale_params)
        render json: @locale
      else
        render json: @locale.errors, status: :unprocessable_entity
      end
    else
      render json: { errors: "not authorized" }, status: :unauthorized
    end
  end

  # DELETE /locales/1
  def destroy
    if @locale.user == @current_user
      @locale.destroy
    else
      render json: { errors: "not authorized" }, status: :unauthorized
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_locale
      @locale = Locale.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def locale_params
      params.require(:locale).permit(:name, :image_url, :description, :historical, :skyline, :landscape, :user_id)
    end
end
