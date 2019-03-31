module Api::V1
  class ArkClassesController < ApplicationController
    before_action :set_ark_class, only: [:show, :edit, :update, :destroy]
    skip_before_action :verify_authenticity_token
  
    # GET /ark_classes
    # GET /ark_classes.json
    def index
      @ark_classes = ArkClass.all
    end
  
    # GET /ark_classes/1
    # GET /ark_classes/1.json
    def show
    end
  
    # GET /ark_classes/new
    def new
      @ark_class = ArkClass.new
    end
  
    # GET /ark_classes/1/edit
    def edit
    end
  
    # POST /ark_classes
    # POST /ark_classes.json
    def create
      @ark_class = ArkClass.new(ark_class_params)
  
      respond_to do |format|
        if @ark_class.save
          format.html { redirect_to @ark_class, notice: 'Ark class was successfully created.' }
          format.json { render :show, status: :created, location: @api_v1_ark_class }
        else
          format.html { render :new }
          format.json { render json: @ark_class.errors, status: :unprocessable_entity }
        end
      end
    end
  
    # PATCH/PUT /ark_classes/1
    # PATCH/PUT /ark_classes/1.json
    def update
      respond_to do |format|
        if @ark_class.update(ark_class_params)
          format.html { redirect_to @ark_class, notice: 'Ark class was successfully updated.' }
          format.json { render :show, status: :ok, location: @api_v1_ark_class }
        else
          format.html { render :edit }
          format.json { render json: @ark_class.errors, status: :unprocessable_entity }
        end
      end
    end
  
    # DELETE /ark_classes/1
    # DELETE /ark_classes/1.json
    def destroy
      @ark_class.destroy
      respond_to do |format|
        format.html { redirect_to api_v1_ark_classes_url, notice: 'Ark class was successfully destroyed.' }
        format.json { head :no_content }
      end
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_ark_class
        @ark_class = ArkClass.find(params[:id])
      end
  
      # Never trust parameters from the scary internet, only allow the white list through.
      def ark_class_params
        params.require(:ark_class).permit(:name, :classtype, :description)
      end
  end
end
